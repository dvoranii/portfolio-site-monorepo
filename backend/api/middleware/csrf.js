import cookieParser from "cookie-parser";
import csrf from "csurf";
import bodyParser from "body-parser";

const csrfProtection = csrf({ cookie: true });

const parseForm = bodyParser.urlencoded({ extended: false });

const csrfMiddleware = (app) => {
  app.use(cookieParser());
  app.use(parseForm);
  app.use(csrfProtection);

  app.get("/api/csrf", (req, res) => {
    console.log(req.csrfToken());
    res.send({ csrfToken: req.csrfToken() });
  });
};

export default csrfMiddleware;
