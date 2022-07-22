import { EModalComponent, EModalToggleState } from '../../ts_ui';
import { Actions, EActions } from './actions';
import { IErsAppState } from './ErsContext';

export const ersReducer = (state: IErsAppState, action: Actions): IErsAppState => {
  switch (action.type) {
    case EActions.Loading: {
      return { ...state, loading: true };
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

    default: {
      throw new Error('action not found.');
    }
  }
};
