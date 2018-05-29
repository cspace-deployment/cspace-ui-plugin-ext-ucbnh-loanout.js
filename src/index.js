import fields from './fields';
import messages from './messages';
import optionLists from './optionLists';

module.exports = () => configContext => ({
  optionLists,
  extensions: {
    'ucbnh-loanout': {
      fields: fields(configContext),
      messages: messages(configContext),
    },
  },
});
