import { ConfigProvider } from 'antd';

import 'antd/dist/antd.css';
import enUS from 'antd/lib/locale/en_US';
import { Provider } from 'mobx-react';
import { appWithTranslation } from 'next-i18next';
import App, { AppContext } from 'next/app';
import 'tailwindcss/tailwind.css';
import Layout from '../components/layout';
import { createStore, Store } from '../stores';
import '../styles/site.css';
import '../styles/tailwind.css';

class MyApp extends App {

  store: Store;

  static async getStaticProps(appContext: AppContext): Promise<any> {
    const ctx: any = appContext.ctx;

    ctx.store = createStore();

    return {
      initialMobxState: ctx.store
    }
  }

  constructor(props: any) {
    super(props);
    const isServer = typeof window === 'undefined';
    this.store = isServer ? props.initialMobxState : createStore(props.initialMobxState);
  }

  render() {
    const { Component, pageProps }: any = this.props

    return (
      <ConfigProvider locale={enUS}>
        <Provider store={this.store}>
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </Provider>

      </ConfigProvider >
    )
  }
}


export default appWithTranslation(MyApp);
