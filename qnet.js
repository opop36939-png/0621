export default async function handler(req, res) {
  try {
    const { baseYY, grdCd } = req.query;

    const serviceKey = process.env.QNET_SERVICE_KEY;

    const url = `https://openapi.q-net.or.kr/api/service/rest/InquiryQualPassRateSVC/getList?serviceKey=${serviceKey}&baseYY=${baseYY}&grdCd=${grdCd}`;

    const response = await fetch(url);
    const data = await response.text();

    res.setHeader("Content-Type", "application/xml; charset=utf-8");
    res.status(200).send(data);

  } catch (err) {
    res.status(500).json({ error: "Q-Net API 호출 실패" });
  }
}