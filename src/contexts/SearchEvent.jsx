import { useState } from 'react';
import Search from '../components/Search';

const SearchEvent = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = (term) => {
    // Bu fonksiyon Search componentinden gelecek arama terimiyle
    // ileride ürün listesi sayfasına yönlendirme yapabilir
    console.log('Arama yapıldı:', term);
  };

  return (
    <div className="SearchEvent">
      <Search
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        onSearch={handleSearch}
      />
    </div>
  );
};

export default SearchEvent;
