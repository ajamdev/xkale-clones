type videoId =
  |"latam"
  |"nps"
  |"old"

export type ContadorProps = {
  icon: any;
  count: number;
  title: string;
  showPlus?: boolean;
  showPorcentaje?: boolean;
}