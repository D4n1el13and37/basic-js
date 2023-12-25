const { NotImplementedError } = require("../extensions/index.js");

/**
 * There's a list of file, since two files cannot have equal names,
 * the one which comes later will have a suffix (k),
 * where k is the smallest integer such that the found name is not used yet.
 *
 * Return an array of names that will be given to the files.
 *
 * @param {Array} names
 * @return {Array}
 *
 * @example
 * For input ["file", "file", "image", "file(1)", "file"],
 * the output should be ["file", "file(1)", "image", "file(1)(1)", "file(2)"]
 *
 */
function renameFiles(names) {
  const mapNames = new Map();

  for (let i = 0; i < names.length; i++) {
    const fileName = names[i]; //получаем имя файал с массива

    // Если имя файла уже встречалось, добавляем суффикс
    if (mapNames.has(fileName)) {
      const count = mapNames.get(fileName); //получаем кол-во файлов с таким именем
      const newName = `${fileName}(${count})`; //создаем новое имя с добавлением суфф

      names[i] = newName; //меняем в массиве имя на новое
      mapNames.set(newName, 1); //обновляем колекцию с новым именем
      mapNames.set(fileName, count + 1); //обновляем количество файлов со схожим именем увеличивая их колво
    } else {
      //если файл встречается в 1 просто добавляеям в коллекию и передаем значение count-a как 1.
      mapNames.set(fileName, 1);
    }
  }

  return names;
}

module.exports = {
  renameFiles,
};
