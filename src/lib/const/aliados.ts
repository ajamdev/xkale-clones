import type { Aliados } from "../type/aliados";
import CheckPoint from "@/assets/aliados/checkpoint.svg";
import Cisco from "@/assets/aliados/cisco.svg";
import CyberArk from "@/assets/aliados/cyberark.svg"; 
import Everbridge from "@/assets/aliados/everbridge.svg";
import Genesys from "@/assets/aliados/genesys.svg";
import Qualtrics from "@/assets/aliados/qualtrics.svg";
import SailPoint from "@/assets/aliados/sailpoint.svg";
import VU from "@/assets/aliados/vu.svg";
import Zendesk from "@/assets/aliados/zendesk.svg";


export const ALIADOS:Aliados[]=[
  {
    id:"checkpoint",
    icon:{
      name:CheckPoint
    }
  },
  {
    id:"cisco",
    icon:{
      name:Cisco
    }
  },
  {
    id:"cyberark",
    icon:{
      name:CyberArk
    }
  },
  {
    id:"everbridge",
    icon:{
      name:Everbridge
    }
  },
  {
    id:"genesys",
    icon:{
      name:Genesys
    }
  },
  {
    id:"qualtrics",
    icon:{
      name:Qualtrics
    }
  },
  {
    id:"sailpoint",
    icon:{
      name:SailPoint
    }
  },
  {
    id:"vu",
    icon:{
      name:VU
    }
  },
  {
    id:"zendesk",
    icon:{
      name:Zendesk
    }
  }
] as const;