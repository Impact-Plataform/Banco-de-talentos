import CurrencyService from "../service/CurrencyService.js";

class CurrencyController {
  async findByCurrency(req, res) {
    let response = await CurrencyService.findByCurrency(req);
    return res.json(response);
  }
}

export default new CurrencyController();