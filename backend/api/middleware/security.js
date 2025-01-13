import helmet from "helmet";

export default function security(app) {
  app.use(helmet());
  app.use((req, res, next) => {
    if (req.headers["user-agent"].indexOf("MSIE ") !== -1) {
      res.write(
        "<script>if (window.top !== window.self) { window.top.location = window.self.location; }</script>"
      );
    }

    next();
  });
}
