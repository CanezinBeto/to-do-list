export default function fetchBitcoin(url, target) {
  async function requireBitcoin() {
    try {
      const require = await fetch(url)
      const json = await require.json()
      const span = document.querySelector(target)
      const { buy } = json.USD

      span.innerText = buy.toFixed(2)
    } catch (error) {
      console.log(error)
    }
  }

  requireBitcoin()
}
