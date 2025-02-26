import React from "react"
import { Title } from "../components"
import { Routes, Route, Navigate} from "react-router-dom"
import {ItemsModule, ActiveItemsModule} from "../modules/itemsModule"
import {WeaponsModule, ActiveWeaponsModule, WeaponsListModule} from "../modules/weaponsModule"
import {NavbarModule} from "../modules/NavBarModule"
import { QuestsModule, ActiveQuestsModule } from "../modules/questsModule"
import { IntelModule } from "../modules/intelModule"
import { ActiveIntelModule } from "../modules/intelModule/ActiveIntelModule"
import { Quest, Items, Weapons, Intel, Debug, Map, Loading } from "../pages"

export const RoutesPages = () => {
  return(
    <Routes>
      <Route path={'/loading'} element={<Loading/>}/>
      <Route path={`/`} element={<NavbarModule/>}>
        <Route path="/" element={<Navigate to="/loading"/>}/>
        <Route path={'/map'} element={<Map/>}/>
        <Route path={`/quest`} element={<Quest/>}>
          <Route path={`/quest/:statusType/`} element={<QuestsModule/>}>
            <Route path={`:questid`} element={<ActiveQuestsModule/>}/>
          </Route>
        </Route>
        <Route path={`/items`} element={<Items/>}>
          <Route path="/items/:type" element={<ItemsModule/>}>
            <Route path={`:itemid`} element={<ActiveItemsModule/>}/>
          </Route>
        </Route>
        <Route path={`/weapons`} element={<Weapons/>}>
          <Route path={`/weapons/:list`} element={<WeaponsModule/>}>
            <Route path={`:type`} element={<WeaponsListModule/>}>
              <Route path={`:weaponid`} element={<ActiveWeaponsModule/>}/>
            </Route>
          </Route>
        </Route>
        <Route path={'/intel'} element ={<Intel/>}>
          <Route path={'/intel/:type'} element={<IntelModule/>}>
            <Route path={":intelid"} element={<ActiveIntelModule/>}></Route>
          </Route>
        </Route>
        {/* components debug pages */}
        <Route path="/debug" element={<Debug/>}>
          <Route path="/debug/fat" element={<>works fat</>}/>
          <Route path="/debug/long" element={<>works long</>}/>
          <Route path="/debug/transparent" element={<>works transparent</>}/>
          <Route path="/debug/neutral" element={<>works neutral</>}/> 
        </Route>
        {/* components debug pages */}
        <Route
          path="*"
          element={
            <Title title="CLASSIFIED" />
          }
          />
      </Route>
    </Routes>
  )
}

export const RoutesConfig = {
 RoutesConfigs: [
  {
      Text:`MAP`,
      Link:`map`,
    },
    {
      Text:"QUESTS",
      Link:`quest`,
    },
    {
      Text:"ITEMS",
      Link:`items`
    },
    {
      Text:"WEAPONS",
      Link:`weapons`
    },
    {
      Text:"SKILLS",
      Link:`skills`
    },
    {
      Text:"INTEL",
      Link:`intel`
    },
    {
      Text:"SYSTEM",
      Link:`system`,
    },
 ]
}