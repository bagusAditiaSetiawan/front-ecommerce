import { StarIcon } from "@heroicons/react/24/outline"



const ProductSection = () => {
    return (
      <section id="product-section">
      <div className="container mx-auto px-4 py-24 max-w-7xl">
        <div className="flex justify-between mb-4">
          <h2 className="text-2xl font-extrabold tracking-tighter text-gray-900">Product Catalog</h2>
          <a href="" className="hidden lg:block">Shop to Collection</a>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {[1,2,3,4,5,6,7,8].map((val) => (
            <div className="border border-gray-300 mt-4 p-4 rounded-xl" key={val}>
              <div>
                <img src="https://demo.cartify.dev/storage/media/565/responsive-images/organic-chambray-embroidered-button-down-chambray-1___responsive_800_1000.jpg"
                alt="tsest"
                className="rounded-xl"
                />
              </div>
              <div className="flex flex-col text-center">
                <h3 className="text-sm font-semibold mt-4">Organic Chamby</h3>
                <div className="mt-4 flex justify-center">
                  <StarIcon className="h-5 w-5 flex-shrink-0 text-yellow-400" />
                </div>
                <p className="text-slate-300 text-sm mt-1">3 Reviews</p>
                <p className="font-bold text-base mt-4">IDR 400.000</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
    )
}

export default ProductSection