describe('Teste Appium - ApiDemos', () => {
    it('deve abrir o app e navegar até Preference > Default values', async () => {
        const el = await $('~Preference')
        await el.click()

        const el2 = await $('~4. Default values')
        await el2.click()

        const checkbox = await $('android:id/checkbox')
        await expect(checkbox).toBeDisplayed()
    })
})
