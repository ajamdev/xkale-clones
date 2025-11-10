type infoId =
  |'identity'
  |'expert'
  |'partner'

export interface Info {
  id: infoId;
  icon:{
    name: any
  }
  title: string;
  description: string;
  className: string;
}