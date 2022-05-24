import { useState, useContext } from "react";
import LocaleContext from "../../LocaleContext";
import Navbar from "../../components/navbar/Navbar";
import Header from "../../components/header/Header";
import { useLocation } from "react-router-dom";
import { format } from "date-fns";
import { DateRange } from "react-date-range";
import SearchItem from "../../components/searchItem/SearchItem";
import { useTranslation } from "react-i18next";
import * as rdrLocales from 'react-date-range/dist/locale';
import "./list.css";

const List = () => {
  const location = useLocation();
  const [destination, setDestination] = useState(location.state.destination);
  const [date, setDate] = useState(location.state.date);
  const [openDate, setOpenDate] = useState(false);
  const [options, setOptions] = useState(location.state.options);
  const { t } = useTranslation();
  const { locale } = useContext(LocaleContext);

  return (
    <div>
      <Navbar />
      <Header type="list" />
      <div className="listContainer">
        <div className="listWrapper">
          <div className="listSearch">
            <h1 className="lsTitle">{t('search')}</h1>
            <div className="lsItem">
              <label>{t('destination')}</label>
              <input placeholder={destination} type="text" />
            </div>
            <div className="lsItem">
              <label>{t('check-in')}</label>
              <span onClick={() => setOpenDate(!openDate)}>{`${format(
                date[0].startDate, t('date_format')
              )} ${t('to')} ${format(date[0].endDate, t('date_format'))}`}</span>
              {openDate && (
                <DateRange
                  onChange={(item) => setDate([item.selection])}
                  minDate={new Date()}
                  ranges={date}
                  locale={locale === "es" ? rdrLocales.es : rdrLocales.enUS}
                />
              )}
            </div>
            <div className="lsItem">
              <label>{t('options')}</label>
              <div className="lsOptions">
                <div className="lsOptionItem">
                  <span className="lsOptionText">
                    {t('min_price')} <small>{t('per_night')}</small>
                  </span>
                  <input type="number" className="lsOptionInput" />
                </div>
                <div className="lsOptionItem">
                  <span className="lsOptionText">
                  {t('max_price')} <small>{t('per_night')}</small>
                  </span>
                  <input type="number" className="lsOptionInput" />
                </div>
                <div className="lsOptionItem">
                  <span className="lsOptionText">{t('adults')}</span>
                  <input
                    type="number"
                    min={1}
                    className="lsOptionInput"
                    placeholder={options.adult}
                  />
                </div>
                <div className="lsOptionItem">
                  <span className="lsOptionText">{options.children > 1 ? t('children') : t('child')}</span>
                  <input
                    type="number"
                    min={0}
                    className="lsOptionInput"
                    placeholder={options.children}
                  />
                </div>
                <div className="lsOptionItem">
                  <span className="lsOptionText">{t('rooms')}</span>
                  <input
                    type="number"
                    min={1}
                    className="lsOptionInput"
                    placeholder={options.room}
                  />
                </div>
              </div>
            </div>
            <button>{t('search')}</button>
          </div>
          <div className="listResult">
            <SearchItem />
            <SearchItem />
            <SearchItem />
            <SearchItem />
            <SearchItem />
            <SearchItem />
            <SearchItem />
            <SearchItem />
            <SearchItem />
          </div>
        </div>
      </div>
    </div>
  );
};

export default List;
