import Button from "@material-ui/core/Button";

const RootPage: React.VFC = () => {
  return (
    <>
      <header>
        <div style={{ width: 200 }}>
          <img src="/images/akispacecrea-logo.svg" alt="ロゴ" />
        </div>
      </header>
      <h1></h1>
      <Button variant="contained" color="primary">
        Hello
      </Button>
    </>
  );
};

export default RootPage;
