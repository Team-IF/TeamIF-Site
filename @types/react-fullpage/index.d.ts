declare module '@fullpage/react-fullpage' {
  interface ReactFullPageProps {
    readonly licensekey: string;
    readonly scrollingSpeed?: number;
    readonly render: React.FC;
  }

  interface ReactFullPageWrapperProps {
    readonly children: React.ReactNode;
  }

  function ReactFullPage(props: ReactFullPageProps): JSX.Element;

  function Wrapper(props: ReactFullPageWrapperProps): JSX.Element;

  ReactFullPage.Wrapper = Wrapper;

  export default ReactFullPage;
}
