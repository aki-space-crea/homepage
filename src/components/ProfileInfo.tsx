import { VFC } from 'react'
import { useState } from 'react'

import { Box, List, ListItem, Text } from '@chakra-ui/react'

const ProfileInfo: VFC = () => {
  const [profileBaseInfos] = useState([
    { tit: 'Name', val: 'AKI' },
    { tit: 'Gender', val: 'X' },
    {
      tit: 'Occupation',
      val: 'FrontEndEngineer, WebDesigner & GranphicDeginer'
    }
  ])

  const [profileLikeInfos] = useState([
    'コーディング',
    'デザイン',
    '散歩',
    'サイクリンング',
    'カラオケ',
    'YouTube',
    'TikTok'
  ])

  return (
    <List>
      {profileBaseInfos.map((profileBaseInfo, i) => {
        const isNameCssPropertyVal = (cssPropertyVal: string, baseCssPropertyVal: string) => {
          return `${profileBaseInfo.tit}` === 'Name' ? cssPropertyVal : baseCssPropertyVal
        }

        return (
          <ListItem
            key={i}
            fontSize={isNameCssPropertyVal('16px', '14px')}
            fontWeight={isNameCssPropertyVal('bold', 'normal')}
            mt={isNameCssPropertyVal('0', '60px')}
          >
            <Text mr="8px">{profileBaseInfo.tit}</Text>

            <Box mt="16px" ml="64px">
              <Text>{profileBaseInfo.val}</Text>
            </Box>
          </ListItem>
        )
      })}

      <ListItem mt="40px">
        <Text>Like</Text>
        <Box display="flex" flexWrap="wrap" mt="8px" ml="64px">
          {profileLikeInfos.map((profileLikeInfo, i) => {
            return (
              <Text key={i} mr="8px">
                {profileLikeInfo}
              </Text>
            )
          })}
        </Box>
      </ListItem>
    </List>
  )
}

export default ProfileInfo
