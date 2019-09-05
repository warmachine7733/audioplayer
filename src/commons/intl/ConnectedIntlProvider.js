import { connect } from "react-redux";
import { IntlProvider, addLocaleData } from "react-intl";
import en from "react-intl/locale-data/en";
import hi from "react-intl/locale-data/hi";
import gu from "react-intl/locale-data/gu";
import od from "react-intl/locale-data/or";
import ta from "react-intl/locale-data/ta";
import be from "react-intl/locale-data/be";
import te from "react-intl/locale-data/te";
import ka from "react-intl/locale-data/ka";
import ur from "react-intl/locale-data/ur";
import mr from "react-intl/locale-data/mr";

let mapStateToProps = state => {
  // ("format",state)
  addLocaleData(en);
  addLocaleData(hi);
  addLocaleData(gu);
  addLocaleData(ta);
  addLocaleData(od);
  addLocaleData(be);
  addLocaleData(te);
  addLocaleData(ka);
  addLocaleData(ur);
  addLocaleData(mr);
  const { lang, messages } = state.intl;
  return { locale: lang, key: lang, messages };
};

export default connect(mapStateToProps)(IntlProvider);
