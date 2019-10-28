export async function presentLoading() {
    // Prepare a loading controller
    this.loading = await this.loadingController.create({
        message: 'Cargando...'
    });
    // Present the loading controller
    await this.loading.present();
}

export async function dismissLoading() {
    // Present the loading controller
    await this.loading.dismiss();
}
