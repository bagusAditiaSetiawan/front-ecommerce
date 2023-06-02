import { navigation } from "../navigations/list-navigation";


const FooterSection = () => {
    return (
        <footer id="footer" className="border-gray-300 border-t">
            <div className="container w-full lg:max-w-7xl mx-auto px-4 flex justify-between py-10">
                <div className="hidden justify-content-center lg:block">
                    <img src="https://tailwindui.com/img/logos/mark.svg"
                    className="object-fit w-20"
                    />
                    <p className="text-slate-400 text-sm lg:text-base">@2023 All Right Reserved</p>
                </div>
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-16">
                    {navigation.categories.map((category) => (
                        <div key={category.id}>
                            <h2 className="font-semibold text-sm">{category.name}</h2>
                            <div className="flex flex-col my-4">
                                {category.sections.map((section) => (
                                    <h4 key={section.id} className="text-sm text-slate-700 hover:text-slate-400 mb-4">{section.name}</h4>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </footer>
    )
}


export default FooterSection;