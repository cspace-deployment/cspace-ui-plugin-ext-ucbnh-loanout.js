import { defineMessages } from 'react-intl';

export default (configContext) => {
  const {
    AutocompleteInput,
    CompoundInput,
    DateInput,
    OptionPickerInput,
    TextInput,
  } = configContext.inputComponents;

  const {
    configKey: config,
  } = configContext.configHelpers;

  const {
    DATA_TYPE_DATE,
    DATA_TYPE_INT,
  } = configContext.dataTypes;

  return {
    'ns2:loansout_naturalhistory': {
      [config]: {
        service: {
          ns: 'http://collectionspace.org/services/loanout/domain/naturalhistory',
        },
      },
      collection: {
        [config]: {
          messages: defineMessages({
            name: {
              id: 'field.loansout_naturalhistory.collection.name',
              defaultMessage: 'Collection',
            },
          }),
          view: {
            type: OptionPickerInput,
            // The source prop is intentionally not set. Users of this extension should provide the
            // desired option list.
          },
        },
      },
      majorGroup: {
        [config]: {
          messages: defineMessages({
            name: {
              id: 'field.loansout_naturalhistory.majorGroup.name',
              defaultMessage: 'Major group',
            },
          }),
          view: {
            type: OptionPickerInput,
            props: {
              source: 'loanoutMajorGroups',
            },
          },
        },
      },
      geographyList: {
        [config]: {
          view: {
            type: CompoundInput,
          },
        },
        geography: {
          [config]: {
            messages: defineMessages({
              name: {
                id: 'field.loansout_naturalhistory.geography.name',
                defaultMessage: 'Geography',
              },
            }),
            view: {
              type: TextInput,
            },
          },
        },
      },
      taxonomyList: {
        [config]: {
          view: {
            type: CompoundInput,
          },
        },
        taxonomy: {
          [config]: {
            messages: defineMessages({
              name: {
                id: 'field.loansout_naturalhistory.taxonomy.name',
                defaultMessage: 'Taxonomy',
              },
            }),
            view: {
              type: AutocompleteInput,
              props: {
                source: 'taxon/local',
              },
            },
          },
        },
      },
      objKindList: {
        [config]: {
          view: {
            type: CompoundInput,
          },
        },
        objKind: {
          [config]: {
            messages: defineMessages({
              name: {
                id: 'field.loansout_naturalhistory.objKind.name',
                defaultMessage: 'Object kind',
              },
            }),
            view: {
              type: OptionPickerInput,
              props: {
                source: 'loanoutObjectKinds',
              },
            },
          },
        },
      },
      shipDate: {
        [config]: {
          dataType: DATA_TYPE_DATE,
          messages: defineMessages({
            name: {
              id: 'field.loansout_naturalhistory.shipDate.name',
              defaultMessage: 'Shipping form date',
            },
          }),
          view: {
            type: DateInput,
          },
        },
      },
      transportMethod: {
        [config]: {
          messages: defineMessages({
            name: {
              id: 'field.loansout_naturalhistory.transportMethod.name',
              defaultMessage: 'Transportation',
            },
          }),
          view: {
            type: OptionPickerInput,
            props: {
              source: 'loanoutTransportMethods',
            },
          },
        },
      },
      numPackages: {
        [config]: {
          dataType: DATA_TYPE_INT,
          messages: defineMessages({
            name: {
              id: 'field.loansout_naturalhistory.numPackages.name',
              defaultMessage: 'Number of packages',
            },
          }),
          view: {
            type: TextInput,
          },
        },
      },
      acknowledgeDate: {
        [config]: {
          dataType: DATA_TYPE_DATE,
          messages: defineMessages({
            name: {
              id: 'field.loansout_naturalhistory.acknowledgeDate.name',
              defaultMessage: 'Acknowledge date',
            },
          }),
          view: {
            type: DateInput,
          },
        },
      },
      numLent: {
        [config]: {
          dataType: DATA_TYPE_INT,
          messages: defineMessages({
            name: {
              id: 'field.loansout_naturalhistory.numLent.name',
              defaultMessage: 'Lent',
            },
          }),
          view: {
            type: TextInput,
          },
        },
      },
      numReturned: {
        [config]: {
          dataType: DATA_TYPE_INT,
          messages: defineMessages({
            name: {
              id: 'field.loansout_naturalhistory.numReturned.name',
              defaultMessage: 'Returned',
            },
          }),
          view: {
            type: TextInput,
          },
        },
      },
      balance: {
        [config]: {
          dataType: DATA_TYPE_INT,
          messages: defineMessages({
            name: {
              id: 'field.loansout_naturalhistory.balance.name',
              defaultMessage: 'Balance',
            },
          }),
          view: {
            type: TextInput,
          },
        },
      },
      discrepancy: {
        [config]: {
          dataType: DATA_TYPE_INT,
          messages: defineMessages({
            name: {
              id: 'field.loansout_naturalhistory.discrepancy.name',
              defaultMessage: 'Discrepancy',
            },
          }),
          view: {
            type: TextInput,
          },
        },
      },
      loanoutItems: {
        [config]: {
          messages: defineMessages({
            name: {
              id: 'field.loansout_naturalhistory.loanoutItems.name',
              defaultMessage: 'Accession numbers',
            },
          }),
          view: {
            type: TextInput,
            props: {
              multiline: true,
            },
          },
        },
      },
      objectGroupList: {
        [config]: {
          view: {
            type: CompoundInput,
          },
        },
        objectGroup: {
          [config]: {
            repeating: true,
            view: {
              type: CompoundInput,
            },
          },
          objectNumbers: {
            [config]: {
              messages: defineMessages({
                fullName: {
                  id: 'field.loansout_naturalhistory.objectNumbers.fullName',
                  defaultMessage: 'Items loaned object numbers',
                },
                name: {
                  id: 'field.loansout_naturalhistory.objectNumbers.name',
                  defaultMessage: 'Object numbers',
                },
              }),
              view: {
                type: TextInput,
              },
            },
          },
          objectQuantity: {
            [config]: {
              dataType: DATA_TYPE_INT,
              messages: defineMessages({
                fullName: {
                  id: 'field.loansout_naturalhistory.objectQuantity.fullName',
                  defaultMessage: 'Items loaned quantity',
                },
                name: {
                  id: 'field.loansout_naturalhistory.objectQuantity.name',
                  defaultMessage: 'Quantity',
                },
              }),
              view: {
                type: TextInput,
              },
            },
          },
          objectConditions: {
            [config]: {
              messages: defineMessages({
                fullName: {
                  id: 'field.loansout_naturalhistory.objectConditions.fullName',
                  defaultMessage: 'Items loaned conditions',
                },
                name: {
                  id: 'field.loansout_naturalhistory.objectConditions.name',
                  defaultMessage: 'Conditions',
                },
              }),
              view: {
                type: TextInput,
              },
            },
          },
          objectNotes: {
            [config]: {
              messages: defineMessages({
                fullName: {
                  id: 'field.loansout_naturalhistory.objectNotes.fullName',
                  defaultMessage: 'Items loaned note',
                },
                name: {
                  id: 'field.loansout_naturalhistory.objectNotes.name',
                  defaultMessage: 'Note',
                },
              }),
              view: {
                type: TextInput,
              },
            },
          },
        },
      },
      returnGroupList: {
        [config]: {
          view: {
            type: CompoundInput,
          },
        },
        returnGroup: {
          [config]: {
            repeating: true,
            view: {
              type: CompoundInput,
            },
          },
          returnObjectNumbers: {
            [config]: {
              messages: defineMessages({
                fullName: {
                  id: 'field.loansout_naturalhistory.returnObjectNumbers.fullName',
                  defaultMessage: 'Items returned object numbers',
                },
                name: {
                  id: 'field.loansout_naturalhistory.returnObjectNumbers.name',
                  defaultMessage: 'Object numbers',
                },
              }),
              view: {
                type: TextInput,
              },
            },
          },
          returnQuantity: {
            [config]: {
              dataType: DATA_TYPE_INT,
              messages: defineMessages({
                fullName: {
                  id: 'field.loansout_naturalhistory.returnQuantity.fullName',
                  defaultMessage: 'Items returned quantity',
                },
                name: {
                  id: 'field.loansout_naturalhistory.returnQuantity.name',
                  defaultMessage: 'Quantity',
                },
              }),
              view: {
                type: TextInput,
              },
            },
          },
          returnDate: {
            [config]: {
              dataType: DATA_TYPE_DATE,
              messages: defineMessages({
                fullName: {
                  id: 'field.loansout_naturalhistory.returnDate.fullName',
                  defaultMessage: 'Items returned date',
                },
                name: {
                  id: 'field.loansout_naturalhistory.returnDate.name',
                  defaultMessage: 'Date',
                },
              }),
              view: {
                type: DateInput,
              },
            },
          },
          returnNotes: {
            [config]: {
              messages: defineMessages({
                fullName: {
                  id: 'field.loansout_naturalhistory.returnNotes.fullName',
                  defaultMessage: 'Items returned note',
                },
                name: {
                  id: 'field.loansout_naturalhistory.returnNotes.name',
                  defaultMessage: 'Note',
                },
              }),
              view: {
                type: TextInput,
              },
            },
          },
          returnDetermination: {
            [config]: {
              messages: defineMessages({
                fullName: {
                  id: 'field.loansout_naturalhistory.returnDetermination.fullName',
                  defaultMessage: 'Items returned new determination',
                },
                name: {
                  id: 'field.loansout_naturalhistory.returnDetermination.name',
                  defaultMessage: 'New determination',
                },
              }),
              view: {
                type: AutocompleteInput,
                props: {
                  source: 'taxon/local',
                },
              },
            },
          },
        },
      },
      transferGroupList: {
        [config]: {
          view: {
            type: CompoundInput,
          },
        },
        transferGroup: {
          [config]: {
            repeating: true,
            view: {
              type: CompoundInput,
            },
          },
          transferDate: {
            [config]: {
              dataType: DATA_TYPE_DATE,
              messages: defineMessages({
                fullName: {
                  id: 'field.loansout_naturalhistory.transferDate.fullName',
                  defaultMessage: 'Transfer date',
                },
                name: {
                  id: 'field.loansout_naturalhistory.transferDate.name',
                  defaultMessage: 'Date',
                },
              }),
              view: {
                type: DateInput,
              },
            },
          },
          transferQuantity: {
            [config]: {
              dataType: DATA_TYPE_INT,
              messages: defineMessages({
                fullName: {
                  id: 'field.loansout_naturalhistory.transferQuantity.fullName',
                  defaultMessage: 'Transfer quantity',
                },
                name: {
                  id: 'field.loansout_naturalhistory.transferQuantity.name',
                  defaultMessage: 'Quantity',
                },
              }),
              view: {
                type: TextInput,
              },
            },
          },
          transferOrg: {
            [config]: {
              messages: defineMessages({
                fullName: {
                  id: 'field.loansout_naturalhistory.transferOrg.fullName',
                  defaultMessage: 'Transfer to institution',
                },
                name: {
                  id: 'field.loansout_naturalhistory.transferOrg.name',
                  defaultMessage: 'To institution',
                },
              }),
              view: {
                type: AutocompleteInput,
                props: {
                  source: 'organization/local',
                },
              },
            },
          },
          transferPerson: {
            [config]: {
              messages: defineMessages({
                fullName: {
                  id: 'field.loansout_naturalhistory.transferPerson.fullName',
                  defaultMessage: 'Transfer to person',
                },
                name: {
                  id: 'field.loansout_naturalhistory.transferPerson.name',
                  defaultMessage: 'To person',
                },
              }),
              view: {
                type: AutocompleteInput,
                props: {
                  source: 'person/local',
                },
              },
            },
          },
          transferDirector: {
            [config]: {
              messages: defineMessages({
                fullName: {
                  id: 'field.loansout_naturalhistory.transferDirector.fullName',
                  defaultMessage: 'Transfer under direction of',
                },
                name: {
                  id: 'field.loansout_naturalhistory.transferDirector.name',
                  defaultMessage: 'Under direction of',
                },
              }),
              view: {
                type: AutocompleteInput,
                props: {
                  source: 'person/local',
                },
              },
            },
          },
          transferNotes: {
            [config]: {
              messages: defineMessages({
                fullName: {
                  id: 'field.loansout_naturalhistory.transferNotes.fullName',
                  defaultMessage: 'Transfer note',
                },
                name: {
                  id: 'field.loansout_naturalhistory.transferNotes.name',
                  defaultMessage: 'Note',
                },
              }),
              view: {
                type: TextInput,
              },
            },
          },
        },
      },
    },
  };
};
