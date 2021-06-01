import React from 'react';
import { Link } from 'react-router-dom';
import Search from '../../components/search/search';
import { useStateValue } from '../../context/StateProvider';
import useGoogleSearch from '../../custom-search-api/use-google-search';
import Response from '../../custom-search-api/response';

import './search-page.css';

// material ui
import SearchIcon from '@material-ui/icons/Search';
import DescriptionIcon from '@material-ui/icons/Description';
import ImageIcon from '@material-ui/icons/Image';
import LocalOfferIcon from '@material-ui/icons/LocalOffer';
import RoomIcon from '@material-ui/icons/Room';
import MoreVertIcon from '@material-ui/icons/MoreVert';

const SearchPage = () => {
  const [{ term }, dispatch] = useStateValue();

  // live api call
  const { data } = useGoogleSearch(term);

  // Mock api call
  // const data = Response; // we're using this cause custom search api has a limit of 100 request on free. so we just save the reponse of one result then working with it 
  // through the development period


  // google search api
  // https://developers.google.com/custom-search/v1/using_rest   :: to get the api key

  // https://cse.google.com/cse/create/new ::: to get the search engine id

  console.log(data);
  return (
    <div className="searchPage">
      <div className="searchPage__header">
        <Link to='/'>
          <img className='searchPage__logo' alt='google logo' src='https://www.google.com/logos/doodles/2021/get-vaccinated-wear-a-mask-save-lives-june-1-6753651837109278-2xa.gif' />
        </Link>
        <div className="searchPage__headerBody">
          <Search hideButtons />
          <div className="searchPage__options">
            <div className="searchPage__optionsLeft">
              <div className="searchPage__option">
                <SearchIcon />
                <Link to='/all'>All</Link>
              </div>
              <div className="searchPage__option">
                <DescriptionIcon />
                <Link to='/news'>News</Link>
              </div>
              <div className="searchPage__option">
                <ImageIcon />
                <Link to='/images'>Images</Link>
              </div>
              <div className="searchPage__option">
                <LocalOfferIcon />
                <Link to='/shopping'>Shopping</Link>
              </div>
              <div className="searchPage__option">
                <RoomIcon />
                <Link to='/maps'>Maps</Link>
              </div>
              <div className="searchPage__option">
                <MoreVertIcon />
                <Link to='/more'>More</Link>
              </div>
            </div>
            <div className="searchPage__optionsRight">
              <div className="searchPage__option">
                <Link to='/settings'>Settings</Link>
              </div>
              <div className="searchPage__option">
                <Link to='/tools'>Tools</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      {term && (
        <div className="searchPage__results">
          <p className="searchPage__resultCount">
            About {data?.searchInformation.formattedTotalResults} results ({data?.searchInformation.formattedSearchTime} seconds) for {term}
          </p>

          {data?.items.map(item => (
            <div className="searchPage__result">
              <a className="searchPage__resultLink" href={item.link}>
                {item.pagemap?.cse_image?.length > 0 && item.pagemap?.cse_image[0].src && (
                  <img src={item.pagemap?.cse_image[0]?.src} alt="result" className="searchPage__resultImage" />
                )}

                {item.displayLink}
              </a>
              <a href={item.link} className="searchPage__resultTitle">
                {item.title}
              </a>
              <p className="searchPage__resultSnippet">
                {item.snippet}
              </p>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}

export default SearchPage;