import cors from "cors";
import "dotenv/config";
import app from "./app";

const PORT = 5000;

app.use(
  cors({
    origin: [
      // frontend API
      "http://localhost:4200",
    ],
    credentials: true,
  })
);
app.use("*", (req, res) => {return res.status(404).json({
    success: false, message: "Page not found",
  });
});

app.use(
  (
    err: any,
    req: any,
    res: any,
    next: any
  ) => {
    console.error(err);
    return res.status(500).json({success: false,
      message: "Internal server error",
    });
  }
);

app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`); 
});
