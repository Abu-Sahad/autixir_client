import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import SubCategorySingle from "../../SubCategorySingle/SubCategorySingle";
import { useEffect, useState } from "react";

const SobByCategory = () => {
    const [toyCategories, setToyCategories] = useState([]);
    useEffect(() => {
        fetch('https://autixir-two.vercel.app/addToy')
            .then(res => res.json())
            .then(data => {
                const toysAllData = data.filter(toy => toy.subCategory == 'truck cars');
                // toysAllData will contain toys with the specified id
                setToyCategories(toysAllData);
            });
    }, []);


    const handleTruckCars = () => {
        fetch('https://autixir-two.vercel.app/addToy')
            .then(res => res.json())
            .then(data => {
                const toysAllData = data.filter(toy => toy.subCategory == 'truck cars');
                // toysAllData will contain toys with the specified id
                setToyCategories(toysAllData);
            });
    }
    const handleRegularCars = () => {
        fetch('https://autixir-two.vercel.app/addToy')
            .then(res => res.json())
            .then(data => {
                const toysAllData = data.filter(toy => toy.subCategory == 'regular cars');
                // toysAllData will contain toys with the specified id
                setToyCategories(toysAllData);
            });
    }
    const handleMiniCars = () => {
        fetch('https://autixir-two.vercel.app/addToy')
            .then(res => res.json())
            .then(data => {
                const toysAllData = data.filter(toy => toy.subCategory == 'mini police cars');
                // toysAllData will contain toys with the specified id
                setToyCategories(toysAllData);
            });
    }
    return (
        <div>
            <h1 className="text-center text-4xl font-bold text-amber-400  mt-5 mb-10">Toy Sports Cars Category</h1>
            <div>
                <Tabs>
                    <TabList className="flex justify-center">
                        <Tab
                            className="px-4 py-2 mx-2 border rounded-lg cursor-pointer hover:bg-blue-200"
                            onClick={handleTruckCars}
                        >
                            Truck Cars
                        </Tab>
                        <Tab
                            className="px-4 py-2 mx-2 border rounded-lg cursor-pointer hover:bg-blue-200"
                            onClick={handleRegularCars}
                        >
                            Regular Cars
                        </Tab>
                        <Tab
                            className="px-4 py-2 mx-2 border rounded-lg cursor-pointer hover:bg-blue-200"
                            onClick={handleMiniCars}
                        >
                            Mini Police Cars
                        </Tab>
                    </TabList>

                    <TabPanel>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-3 p-5">
                            {
                                toyCategories.map(toy => <SubCategorySingle
                                    key={toy._id}
                                    toy={toy}
                                ></SubCategorySingle>)
                            }
                        </div>

                    </TabPanel>
                    <TabPanel>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-3 p-5">
                            {
                                toyCategories.map(toy => <SubCategorySingle
                                    key={toy._id}
                                    toy={toy}
                                ></SubCategorySingle>)
                            }
                        </div>

                    </TabPanel>
                    <TabPanel>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-3 p-5">
                            {
                                toyCategories.map(toy => <SubCategorySingle
                                    key={toy._id}
                                    toy={toy}
                                ></SubCategorySingle>)
                            }
                        </div>

                    </TabPanel>

                </Tabs>
            </div>
        </div>
    );
};

export default SobByCategory;
