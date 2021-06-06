import { Heading, List, ListItem, Text, Box, Image } from "@chakra-ui/react";
import Link from "next/link";

function index(props) {
  return (
    <section>
      <Heading as="h1">Blog</Heading>
      <List>
        <ListItem>
          <Link href="/" boxSize="sm">
            <a>
              <Image src="https://bit.ly/sage-adebayo" alt="Segun Adebayo" />
            </a>
          </Link>
          <Box>
            <Text>title</Text>
            <Text>main-txt</Text>
          </Box>
        </ListItem>
      </List>
    </section>
  );
}

export default index;
