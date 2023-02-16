import './Payment.scss'

export function Payment() {
  return (
    <div className="Payment">
      <h2>Payment</h2>

      <form action="https://www.paypal.com/cgi-bin/webscr" method="post" target="_top">
        <input type="hidden" name="cmd" value="_xclick" />
        <input type="hidden" name="business" value="edixonalbertto@gmail.com" />
        <input type="hidden" name="lc" value="ES" />
        <input type="hidden" name="button_subtype" value="services" />
        <input type="hidden" name="no_note" value="0" />
        <input type="hidden" name="currency_code" value="USD" />
        <input type="hidden" name="bn" value="PP-BuyNowBF:btn_paynowCC_LG.gif:NonHostedGuest" />
        <input
          type="image"
          src="https://www.paypalobjects.com/en_US/i/btn/btn_paynowCC_LG.gif"
          name="submit"
          alt="PayPal, la forma rápida y segura de pagar en Internet."
        />
        <img alt="" src="https://www.paypalobjects.com/es_XC/i/scr/pixel.gif" width="1" height="1" />
      </form>
    </div>
  )
}
