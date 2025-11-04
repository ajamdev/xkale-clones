type aliadosId =
  |'checkpoint'
  |'cisco'
  |'cyberark'
  |'everbridge'
  |'genesys'
  |'qualtrics'
  |'sailpoint'
  |'vu'
  |'zendesk'

type aliadosName = 
  |'CheckPoint'
  |'Cisco'
  |'CyberArk'
  |'Everbridge'
  |'Genesys'
  |'Qualtrics'
  |'SailPoint'
  |'VU'
  |'Zendesk'

  export interface Aliados {
    id: aliadosId;
    icon:{
      name:any
    }
  }