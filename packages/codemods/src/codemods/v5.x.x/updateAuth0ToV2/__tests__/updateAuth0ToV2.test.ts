describe('updateAuth0ToV2', () => {
  it('updates the web-side auth file to the v2 SDK', async () => {
    await matchTransformSnapshot('updateAuth0ToV2', 'default')
  })
})
