import { defineMessages } from 'react-intl';

export default {
  // TODO: This list is identical to taxonMajorGroups from ucbnh-taxon and loaninMajorGroups from
  // ucbnh-loanin. Make these all the same list, defined in a separate plugin.
  loanoutMajorGroups: {
    values: [
      'Spermatophytes',
      'Pteridophytes',
      'Algae',
      'Bryophytes',
      'Fungi',
      'Lichen',
      'n/a',
      'misc',
    ],
    messages: defineMessages({
      Spermatophytes: {
        id: 'option.loanoutMajorGroups.Spermatophytes',
        defaultMessage: 'Spermatophytes',
      },
      Pteridophytes: {
        id: 'option.loanoutMajorGroups.Pteridophytes',
        defaultMessage: 'Pteridophytes',
      },
      Algae: {
        id: 'option.loanoutMajorGroups.Algae',
        defaultMessage: 'Algae',
      },
      Bryophytes: {
        id: 'option.loanoutMajorGroups.Bryophytes',
        defaultMessage: 'Bryophytes',
      },
      Fungi: {
        id: 'option.loanoutMajorGroups.Fungi',
        defaultMessage: 'Fungi',
      },
      Lichen: {
        id: 'option.loanoutMajorGroups.Lichen',
        defaultMessage: 'Lichen',
      },
      'n/a': {
        id: 'option.loanoutMajorGroups.n/a',
        defaultMessage: 'n/a',
      },
      misc: {
        id: 'option.loanoutMajorGroups.misc',
        defaultMessage: 'misc',
      },
    }),
  },
  // TODO: This list is identical to loaninObjectKinds from ucbnh-loanin. Make these all the same
  // list, defined in a separate plugin.
  loanoutObjectKinds: {
    values: [
      'Sheet',
      'Jar',
    ],
    messages: defineMessages({
      Sheet: {
        id: 'option.loanoutObjectKinds.Sheet',
        defaultMessage: 'sheet',
      },
      Jar: {
        id: 'option.loanoutObjectKinds.Jar',
        defaultMessage: 'jar',
      },
    }),
  },
  loanoutTransportMethods: {
    values: [
      'surface',
      'hand-carried',
      'air',
    ],
    messages: defineMessages({
      surface: {
        id: 'option.loanoutTransportMethods.surface',
        defaultMessage: 'surface',
      },
      'hand-carried': {
        id: 'option.loanoutTransportMethods.hand-carried',
        defaultMessage: 'hand-carried',
      },
      air: {
        id: 'option.loanoutTransportMethods.air',
        defaultMessage: 'air',
      },
    }),
  },
};
