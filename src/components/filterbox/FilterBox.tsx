
import Button from '../button/Button';
import FilterType from './FilterType';



const FilterBox = () => {
    
    return (
        <div>
            <h2 className='text-lg mb-2'>Sort By</h2>
            <div className="border p-4 mb-4 rounded-md shadow-md">
                <div className="flex flex-col gap-4 mb-2">
                    <div className="flex flex-col">
                        <FilterType filterType='Old to new' />
                        <FilterType filterType='New to old' />
                        <FilterType filterType='Price Low to High' />
                        <FilterType filterType='Price High to Low' />
                    </div>

                    <Button addClass='bg-primary text-white'>
                        Filtrele
                    </Button>
                </div>
            </div>
        </div>

    );
};

export default FilterBox;