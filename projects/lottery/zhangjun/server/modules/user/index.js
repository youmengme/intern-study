module.exports = async (app, options) => {
  app.get('/all', async (req, res) => {
    return {
      lotteryList: 'ServerData124'
    }
  })
}
