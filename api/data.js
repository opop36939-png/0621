export default function handler(req, res) {
  return res.status(200).json({
    ok: true,
    message: "API 정상 작동"
  });
}
