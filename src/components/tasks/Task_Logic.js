export const handleSave = async (task) => {
  try {
    await window.electronAPI.createTask(task);
  } catch (error) {
    console.log(error);
  }
};
