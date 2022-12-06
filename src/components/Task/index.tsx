import { Text, TouchableOpacity, View, Image } from "react-native";

import { styles } from "./styles";

import UncheckedIcon from "../../assets/unchecked.png";
import CheckedIcon from "../../assets/checked.png";
import TrashIcon from "../../assets/trash.png";

import { TaskModel } from "../../models/Task";

type Props = {
  task: TaskModel;  
  onChange: () => void;
  onRemove: () => void;
}

export function Task({ task, onChange, onRemove }: Props) {
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={onChange}>
        <Image source={task.done ? CheckedIcon : UncheckedIcon} style={styles.statusImage} />
      </TouchableOpacity>

      <Text style={[styles.description, task.done ? styles.descriptionDecorationLine : styles.descriptionDecorationNone]}>
        {task.description}
      </Text>

      <TouchableOpacity onPress={onRemove}>
        <Image source={TrashIcon} style={styles.trashImage} />
      </TouchableOpacity>
    </View>
  )
}