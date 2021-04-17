// redux
import { createSelector, createSlice, PayloadAction } from "@reduxjs/toolkit";

// utils
import { calcBreakpoints } from "../utils";

// slice
type ViewportStateType = {
  width: number;
  height: number;
  extraSmall: boolean;
  small: boolean;
  medium: boolean;
  large: boolean;
  extraLarge: boolean;
};

const initialState: ViewportStateType = {
  width: window.innerWidth,
  height: window.innerHeight,
  ...calcBreakpoints(window.innerWidth),
};

const viewportSlice = createSlice({
  name: "viewport",
  initialState,
  reducers: {
    viewportWidthChangeEvent: (
      state: ViewportStateType,
      { payload }: PayloadAction<number>
    ) => {
      return {
        ...state,
        width: payload,
        ...calcBreakpoints(payload),
      };
    },
    viewportHeightChangeEvent: (
      state: ViewportStateType,
      { payload }: PayloadAction<number>
    ) => {
      return {
        ...state,
        height: payload,
      };
    },
  },
});

const { actions, reducer } = viewportSlice;

// actions
export const { viewportHeightChangeEvent, viewportWidthChangeEvent } = actions;

// selectors
export const selectViewportState = (
  state: any /** RootState */
): ViewportStateType => state.viewport;

export const selectWidth = createSelector(
  selectViewportState,
  (state: ViewportStateType) => {
    return state.width;
  }
);

export const selectHeight = createSelector(
  selectViewportState,
  (state: ViewportStateType) => {
    return state.height;
  }
);

export const selectExtraSmall = createSelector(
  selectViewportState,
  (state: ViewportStateType) => {
    return state.extraSmall;
  }
);

export const selectSmall = createSelector(
  selectViewportState,
  (state: ViewportStateType) => {
    return state.small;
  }
);

export const selectMedium = createSelector(
  selectViewportState,
  (state: ViewportStateType) => {
    return state.medium;
  }
);

export const selectLarge = createSelector(
  selectViewportState,
  (state: ViewportStateType) => {
    return state.large;
  }
);

export const selectExtraLarge = createSelector(
  selectViewportState,
  (state: ViewportStateType) => {
    return state.extraLarge;
  }
);

export default reducer;
