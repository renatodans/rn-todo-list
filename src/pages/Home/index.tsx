import { useState } from "react";
import {
  Alert,
  FlatList,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  Image,
} from "react-native";

import { Task } from "../../components/Task";

import { styles } from "./styles";

import Logo from "../../assets/logo.png";
import ClipboardIcon from "../../assets/clipboard.png";
import PlusIcon from "../../assets/plus.png";

import { TaskModel } from "../../models/Task";

export function Home() {
  const [tasks, setTasks] = useState<TaskModel[]>([]);
  const [taskDescription, setTaskDescription] = useState("");

  const [taskDone, setTaskDone] = useState(0);

  function handleTaskAdd() {
    if (!taskDescription) {
      return;
    }

    const task = {} as TaskModel;
    task.id = tasks.length + 1;
    task.description = taskDescription;

    setTasks((prevState) => [...prevState, task]);
    setTaskDescription("");
  }

  function handleTaskRemove(task: TaskModel) {
    Alert.alert("Remover", "Deseja remover essa tarefa?", [
      {
        text: "Sim",
        onPress: () =>
          setTasks((prevState) => prevState.filter((t) => t.id !== task.id)),
      },
      {
        text: "Não",
        style: "cancel",
      },
    ]);
  }

  function handleTaskChange(id: number) {
    const changeTasks = tasks.map((t) => {
      if (t.id === id) {
        t.done = !t.done;
      }

      return t;
    });

    setTasks(changeTasks);
    setTaskDone(changeTasks.filter((t) => t.done).length);
  }

  return (
    <View style={styles.container}>
      <View style={styles.containerLogo}>
        <Image style={styles.logoImage} source={Logo} />
      </View>

      <View style={styles.form}>
        <TextInput
          style={styles.input}
          placeholder="Adicione uma nova tarefa"
          placeholderTextColor="#6B6B6B"
          onChangeText={setTaskDescription}
          value={taskDescription}
        />

        <TouchableOpacity
          style={[
            styles.button,
            taskDescription.length == 0
              ? styles.buttonDisabled
              : styles.buttonEnable,
          ]}
          onPress={handleTaskAdd}
          disabled={taskDescription.length == 0}
        >
          <Image style={styles.plusIcon} source={PlusIcon} />
        </TouchableOpacity>
      </View>

      <View style={styles.info}>
        <View style={styles.createdInfo}>
          <Text style={styles.createdText}>Criadas</Text>
          <Text style={styles.createdCounterText}>{tasks.length}</Text>
        </View>

        <View style={styles.doneInfo}>
          <Text style={styles.doneText}>Concluídas</Text>
          <Text style={styles.doneCounterText}>{taskDone}</Text>
        </View>
      </View>

      <FlatList
        data={tasks}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <Task
            key={item.id}
            task={item}
            onChange={() => handleTaskChange(item.id)}
            onRemove={() => handleTaskRemove(item)}
          />
        )}
        showsVerticalScrollIndicator={false}
        ListEmptyComponent={() => (
          <View style={styles.containerEmpty}>
            <Image source={ClipboardIcon} style={styles.clipboardImage} />
            <Text style={styles.listEmptyTextBold}>
              Você ainda não tem tarefas cadastradas
            </Text>
            <Text style={styles.listEmptyText}>
              Crie tarefas e organize seus itens a fazer
            </Text>
          </View>
        )}
      />
    </View>
  );
}
