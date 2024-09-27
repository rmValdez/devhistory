import { createStore, Action, createHook, createSubscriber } from 'react-sweet-state';

// Define the shape of your UI state
interface UIState {
  loaderState: boolean;
  theme: string;
  contentBoxHeight: number;
  contentBoxWidth: number;
  drawerMode: string;
  currentBreakPoint: string;
}

// Define the shape of your actions
type UIActions = typeof actions;

// Define the actions for the store
const actions = {
  setDrawerMode: (value: string): Action<UIState> => ({ setState }) => {
    setState({ drawerMode: value });
  },
  setTheme: (value: string): Action<UIState> => ({ setState }) => {
    setState({ theme: value });
  },
  setCurrentBreakPoint: (breakpoint: string): Action<UIState> => ({ setState }) => {
    setState({ currentBreakPoint: breakpoint });
  },
  setContentBoxHeight: (newHeight = 600): Action<UIState> => ({ setState }) => {
    setState({ contentBoxHeight: newHeight });
  },
  setContentBoxWidth: (newWidth: number): Action<UIState> => ({ setState }) => {
    setState({ contentBoxWidth: newWidth });
  },
  openLoader: (): Action<UIState> => ({ setState }) => {
    setState({ loaderState: true });
  },
  closeLoader: (): Action<UIState> => ({ setState }) => {
    setState({ loaderState: false });
  },
};

// Create the store
const Store = createStore<UIState, UIActions>({
  initialState: {
    loaderState: false,
    theme: 'light',
    contentBoxHeight: 600,
    contentBoxWidth: 800,
    drawerMode: 'open',
    currentBreakPoint: 'desktop',
  },
  actions,
});

// Hook to use the store
const useStore = createHook(Store);

// Selector to extract state for UI
export const getUIStore = (state: UIState) => ({
  loader: state.loaderState,
  theme: state.theme,
  contentBoxHeight: state.contentBoxHeight,
  contentBoxWidth: state.contentBoxWidth,
  drawerMode: state.drawerMode,
  currentBreakPoint: state.currentBreakPoint,
});

// Subscriber for the UI store
export const UIStore = createSubscriber(Store, {
  selector: getUIStore,
  displayName: 'UISizing',
});

// Hook to use the UI store with the selector
export const useUIStore = createHook(Store, {
  selector: getUIStore,
});

export default useStore;
