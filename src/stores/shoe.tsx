import create from "zustand";

const defaultRotation = {
  x: {
    current: 0,
    target: 0,
  },
  y: {
    current: 0,
    target: 0,
  },
  z: {
    current: 0,
    target: 0,
  },
};

const defaultPosition = {
  x: {
    current: 0,
    target: 0,
  },
  y: {
    current: 0,
    target: 0,
  },
  z: {
    current: 0,
    target: 0,
  },
};

type Positions = {
  x?: number;
  y?: number;
  z?: number;
};

type useShoePropsState = {
  color: string;
  changeColor: (color: string) => void;
  rotation: {
    x: {
      current: number;
      target: number;
    };
    y: {
      current: number;
      target: number;
    };
    z: {
      current: number;
      target: number;
    };
  };
  position: {
    x: {
      current: number;
      target: number;
    };
    y: {
      current: number;
      target: number;
    };
    z: {
      current: number;
      target: number;
    };
  };

  update: () => void;

  changeRotation: (Positions: Positions, setInCurrent?: boolean) => void;
  changePosition: (Positions: Positions, setInCurrent?: boolean) => void;
  resetRotation: () => void;
  resetPosition: () => void;
};

const roundValues = (value: number) => {
  return parseFloat(value.toFixed(2));
};

export const useShoeProps = create<useShoePropsState>((set, get) => ({
  color: "#FF0000",

  rotation: defaultRotation,

  position: defaultPosition,

  update: () => {
    const state = get();
    const { rotation, position, changeRotation, changePosition } = state;

    const newRotation = {
      x: rotation.x.current,
      y: rotation.y.current,
      z: rotation.z.current,
    };
    const newPosition = {
      x: position.x.current,
      y: position.y.current,
      z: position.z.current,
    };

    if (roundValues(rotation.y.current) !== roundValues(rotation.y.target)) {
      if (roundValues(rotation.y.current) > roundValues(rotation.y.target)) {
        newRotation.y -= 0.1;
      } else if (rotation.y.current < rotation.y.target) {
        newRotation.y += 0.1;
      }
    }

    if (roundValues(rotation.x.current) !== roundValues(rotation.x.target)) {
      if (roundValues(rotation.x.current) > roundValues(rotation.x.target)) {
        newRotation.x -= 0.1;
      } else if (rotation.x.current < rotation.x.target) {
        newRotation.x += 0.1;
      }
    }

    if (roundValues(rotation.z.current) !== roundValues(rotation.z.target)) {
      if (roundValues(rotation.z.current) > roundValues(rotation.z.target)) {
        newRotation.z -= 0.1;
      } else if (rotation.z.current < rotation.z.target) {
        newRotation.z += 0.1;
      }
    }

    if (roundValues(position.y.current) !== roundValues(position.y.target)) {
      if (roundValues(position.y.current) > roundValues(position.y.target)) {
        newPosition.y -= 0.1;
      } else if (position.y.current < position.y.target) {
        newPosition.y += 0.1;
      }
    }

    if (roundValues(position.x.current) !== roundValues(position.x.target)) {
      if (roundValues(position.x.current) > roundValues(position.x.target)) {
        newPosition.x -= 0.1;
      } else if (position.x.current < position.x.target) {
        newPosition.x += 0.1;
      }
    }

    if (roundValues(position.z.current) !== roundValues(position.z.target)) {
      if (roundValues(position.z.current) > roundValues(position.z.target)) {
        newPosition.z -= 0.1;
      } else if (position.z.current < position.z.target) {
        newPosition.z += 0.1;
      }
    }

    changeRotation(newRotation, true);
    changePosition(newPosition, true);
  },

  changeRotation: ({ x, y, z }, setInCurrent) => {
    if (x !== undefined) {
      set((state) => ({
        ...state,
        rotation: {
          ...state.rotation,
          x: { ...state.rotation.x, [setInCurrent ? "current" : "target"]: x },
        },
      }));
    }
    if (y !== undefined) {
      set((state) => ({
        ...state,
        rotation: {
          ...state.rotation,
          y: { ...state.rotation.y, [setInCurrent ? "current" : "target"]: y },
        },
      }));
    }
    if (z !== undefined) {
      set((state) => ({
        ...state,
        rotation: {
          ...state.rotation,
          z: { ...state.rotation.z, [setInCurrent ? "current" : "target"]: z },
        },
      }));
    }
  },

  changePosition: ({ x, y, z }, setInCurrent) => {
    if (x !== undefined) {
      set((state) => ({
        ...state,
        position: {
          ...state.position,
          x: { ...state.position.x, [setInCurrent ? "current" : "target"]: x },
        },
      }));
    }
    if (y !== undefined) {
      set((state) => ({
        ...state,
        position: {
          ...state.position,
          y: { ...state.position.y, [setInCurrent ? "current" : "target"]: y },
        },
      }));
    }
    if (z !== undefined) {
      set((state) => ({
        ...state,
        position: {
          ...state.position,
          z: { ...state.position.z, [setInCurrent ? "current" : "target"]: z },
        },
      }));
    }
  },

  resetRotation: () => {
    set((state) => ({ ...state, rotation: defaultRotation }));
  },

  resetPosition: () => {
    set((state) => ({ ...state, position: defaultPosition }));
  },

  changeColor: (colors) => {
    set((state) => ({ ...state, color: colors }));
  },
}));
