import formCreate from "./handlers/forms";

const router = express.Router();

router.post('/', formCreate.create);

export default router;