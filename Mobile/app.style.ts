export const perfilIconStyle = (
  size: number,
  focused: boolean,
  color: string
) => ({
  width: size,
  height: size,
  borderRadius: size / 2,
  borderWidth: focused ? 2 : 0,
  borderColor: focused ? color : "transparent",
});
