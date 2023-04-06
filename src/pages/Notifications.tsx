import React, {useState} from 'react';
import Header from "../components/Header/Header";

const Notifications = () => {
  const [searchValue, setSearchValue] = useState<string>("")

  return (
    <div>
      <Header setSearchValue={setSearchValue}/>
      <div>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium aspernatur corporis debitis dignissimos dolor inventore optio possimus repellendus repudiandae voluptate! Ab beatae est maxime quo repellendus sapiente sunt unde veniam veritatis voluptas! Accusamus aliquid architecto, dignissimos dolores doloribus eaque expedita fuga minima natus necessitatibus, placeat provident quis quisquam veritatis voluptate, voluptatibus voluptatum! Ad consequuntur, ea eum eveniet illum incidunt iste minus nam nulla obcaecati perferendis reprehenderit rerum voluptas. Aliquid at aut culpa deserunt distinctio eius impedit obcaecati quia reprehenderit. Amet asperiores aut consectetur cumque, dolor, dolore dolorum est et facilis inventore ipsum laboriosam laudantium minima nemo nobis nulla obcaecati placeat porro quam repellendus tempora temporibus totam. A, accusamus, adipisci animi consequuntur corporis deserunt doloremque ipsum iste mollitia necessitatibus nesciunt numquam quis recusandae saepe sint soluta, tempore ut voluptate voluptates voluptatum. Ad animi consectetur consequatur corporis delectus eum, facilis harum hic illo iusto mollitia nisi odio possimus repudiandae voluptate! Eius facilis nulla quia quidem ratione. Aliquam amet asperiores aspernatur, at blanditiis commodi consequatur delectus deleniti dicta dignissimos, dolorum eos necessitatibus nemo, numquam obcaecati odio odit perferendis perspiciatis placeat possimus quas repellendus reprehenderit sequi sint sunt tenetur totam ut. Accusantium aut culpa cumque, cupiditate dolor earum eius enim et eveniet excepturi exercitationem hic id illum impedit in inventore iure minima nihil nisi odit, officiis perferendis provident quibusdam, quo quod rem repellat repellendus sapiente sunt suscipit totam unde veniam voluptas. Doloremque eligendi fuga fugiat fugit in nam nisi reprehenderit. A ea iste iure laudantium nostrum officiis quasi soluta!

      </div>
    </div>

  );
};

export default Notifications;