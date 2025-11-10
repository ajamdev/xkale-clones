type infoId =
  |'identity'
  |'expert'
  |'partner'

export interface Info {
  id: infoId;
  title: string;
  description: string;
  className: string;
}