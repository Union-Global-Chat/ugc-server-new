import { Router } from "express";
import createMessage from "./models/message";

const router = Router();

router.get("/", (req, res) => {
  res.send({
    "message": "Notfound"
  });
});

router.post("/message", async (req, res) => {
  const message = createMessage(req.app.get("sequelize"));
  const data = req.body;
  const reference = {
    channel_id: null,
    guild_id: null,
    message_id: null
  }
  if (data.get("reference")) {
    reference.channel_id = data.reference.channel_id;
    reference.guild_id = data.reference.guild_id;
    reference.message_id = data.reference.message_id;
  }
  await message.create({
    content: data.content,
    id: data.id,
    clean_content: data.clean_content,
    reference_channel_id: reference.channel_id,
    reference_guild_id: reference.guild_id,
    reference_message_id: reference.message_id,
  })
})

export default router;