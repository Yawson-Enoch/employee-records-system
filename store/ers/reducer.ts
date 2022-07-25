import { EModalComponent, EModalToggleState } from '../../ts_ui';
import { Actions, EActions } from './actions';
import { IErsAppState } from './ErsContext';

export const ersReducer = (state: IErsAppState, action: Actions): IErsAppState => {
  switch (action.type) {
    case EActions.Loading: {
      if (action.payload === 'show') {
        return { ...state, loading: true };
      }
      return { ...state, loading: false };
    }

    case EActions.FetchEmployees: {
      return { ...state, employees: action.payload, loading: false };
    }

    case EActions.ModalActive: {
      if (
        action.payload.toggleState === EModalToggleState.show &&
        action.payload.component === EModalComponent.createUserForm
      ) {
        return { ...state, modalActive: true, createUserFormActive: true };
      }
      if (
        action.payload.toggleState === EModalToggleState.show &&
        action.payload.component === EModalComponent.confirmDeleteBox
      ) {
        return { ...state, modalActive: true, confirmDeleteBoxActive: true };
      }
      return {
        ...state,
        modalActive: false,
        confirmDeleteBoxActive: false,
        createUserFormActive: false,
        editing: false,
      };
    }

    case EActions.UpdateEmployees: {
      return { ...state, employees: action.payload };
    }

    case EActions.UniqueUserId: {
      return { ...state, uniqueUserId: action.payload };
    }

    case EActions.Editing: {
      return { ...state, editing: true };
    }

    case EActions.EditInfo: {
      return { ...state, editInfo: action.payload };
    }

    case EActions.Error: {
      if (action.payload === 'show') {
        return { ...state, error: true };
      }
      return { ...state, error: false };
    }

    case EActions.ErrorMessage: {
      return { ...state, errorMessage: action.payload };
    }

    default: {
      throw new Error('action not found.');
    }
  }
};
