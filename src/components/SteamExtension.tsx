const SteamExtension = () => {
  return (
    <div className="min-h-screen w-full bg-slate-900">
      <div
        className="container
        mx-auto
        flex
        h-full
        flex-col
        items-center
        justify-center
      "
      >
        <h1 className="mt-10 text-center text-4xl font-bold text-white">
          Steam TL Fiyat Dönüştürücü
        </h1>
        <p className="mt-5 text-center text-white">
          Steam'de gördüğünüz fiyatları TL'ye çevirir.
        </p>

        <p className="mt-5 text-center text-green-400">
          Başarılı bir şekilde yüklendi. Artık Steam'de gördüğünüz fiyatlar
          TL'ye çevrilecek.
        </p>
        <p className="mt-5 text-center text-white">
          Açıp kapatmak için sağ üstteki eklentiler kısmından Steam TL Fiyat
          Dönüştürücü'nün simgesine tıklayın.
          <br /> Orada bulunan Eklenti aktif/pasif butonu ile eklentiyi
          aktif/pasif yapabilirsiniz.
          <br /> Bu işlemden sonra Steam sayfasını yenilemeniz gerekmektedir.
        </p>
        <div className="flex gap-4">
          <img
            className="mt-5 rounded-lg"
            src="/assets/images/steam/before.png"
            alt=""
            width={600}
          />

          <img
            className="mt-5 rounded-lg"
            src="/assets/images/steam/after.png"
            alt=""
            width={600}
          />
        </div>

        <div className="mt-5">
          <small className="text-center text-white">
            I can build web applications for you. Contact me at{' '}
            <a
              className="text-green-400"
              href="mailto:ugur.kellecioglu@outlook.com"
            >
              ugur dot kellecioglu at outlook dot com
            </a>
          </small>
          <a
            style={{
              cursor: 'pointer',
            }}
            className="mt-5 block  text-center text-green-400"
            href="/"
          >
            Anasayfa
          </a>
        </div>
      </div>
    </div>
  );
};

export default SteamExtension;
