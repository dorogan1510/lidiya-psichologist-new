import * as React from 'react'
import Document, { Html, Head, Main, NextScript } from 'next/document'
import createEmotionServer from '@emotion/server/create-instance'
import theme, { roboto } from '../styles/theme'
import createEmotionCache from '../src/createEmotionCache'
import Header from '../globalComponents/Header'

export default class MyDocument extends Document {
    render() {
        return (
            <Html lang='en' className={roboto.className}>
                <Head>
                    {/* PWA primary color */}
                    <meta
                        name='theme-color'
                        content={theme.palette.primary.main}
                    />
                    <link rel='shortcut icon' href='/favicon.ico' />
                    <title>
                        Ксения Сухарева — Преподаватель иностранных языков.
                    </title>
                    <meta
                        name='description'
                        content='Ксения Сухарева. Со мной можно выучить английский, турецкий, французский и арабский языки. Также у меня можно пройти онлайн интенсив по турецкому языку и с нуля начать говорить на турецком.'
                    />
                    <meta
                        name='keywords'
                        content='english language, french language, arabic language, turkish language, английский язык, турецкий язык, арабский язык, французский язык, онлайн курс по турецкому языку, интенсив по турецкому, выучить английский, выучить вранцузский, выучить арабский, выучить турецкий, morkoovochka, преподаватель английского, английский для начинающих, турецкий для начинающих, арабский для начинающих, французский для начинающих'
                    />
                    <meta name='author' content='Ksenia Sukhareva' />
                    <meta name='emotion-insertion-point' content='' />
                    {(this.props as any).emotionStyleTags}
                </Head>
                <body>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        )
    }
}

// `getInitialProps` belongs to `_document` (instead of `_app`),
// it's compatible with static-site generation (SSG).
MyDocument.getInitialProps = async ctx => {
    // Resolution order
    //
    // On the server:
    // 1. app.getInitialProps
    // 2. page.getInitialProps
    // 3. document.getInitialProps
    // 4. app.render
    // 5. page.render
    // 6. document.render
    //
    // On the server with error:
    // 1. document.getInitialProps
    // 2. app.render
    // 3. page.render
    // 4. document.render
    //
    // On the client
    // 1. app.getInitialProps
    // 2. page.getInitialProps
    // 3. app.render
    // 4. page.render

    const originalRenderPage = ctx.renderPage

    // You can consider sharing the same Emotion cache between all the SSR requests to speed up performance.
    // However, be aware that it can have global side effects.
    const cache = createEmotionCache()
    const { extractCriticalToChunks } = createEmotionServer(cache)

    ctx.renderPage = () =>
        originalRenderPage({
            enhanceApp: (App: any) =>
                function EnhanceApp(props) {
                    return <App emotionCache={cache} {...props} />
                },
        })

    const initialProps = await Document.getInitialProps(ctx)
    // This is important. It prevents Emotion to render invalid HTML.
    // See https://github.com/mui/material-ui/issues/26561#issuecomment-855286153
    const emotionStyles = extractCriticalToChunks(initialProps.html)
    const emotionStyleTags = emotionStyles.styles.map((style: any) => (
        <style
            data-emotion={`${style.key} ${style.ids.join(' ')}`}
            key={style.key}
            // eslint-disable-next-line react/no-danger
            dangerouslySetInnerHTML={{ __html: style.css }}
        />
    ))

    return {
        ...initialProps,
        emotionStyleTags,
    }
}
