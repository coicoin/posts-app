export const lexicon = {
  buttons: {
    toggleTheme: "Toggle theme",
    close: "Закрыть",
    about: "О проекте",
    main: "Главная страница",
    posts: "Посты",
    users: "Пользователи",
    tasks: "Задачи",
    photos: "Фото",
    albums: "Альбомы",
    x: "X",
    goToPosts: "Перейти к постам",
  },
  titles: {
    appName: "Posts App",
    filterByTitleLength: "Фильтр по длине заголовка",
    filterByTitleOption: (length: number) => `> ${length} символов`,
    postsCount: (postsCount: number, filteredPosts: number) =>
      `Кол-во постов: ${filteredPosts} из ${postsCount}`,
    photo: "Photo",
    albums: "Albums",
    posts: "Posts",
    welcome: "Привет, гость 👋",
    mainDescription:
      "Добро пожаловать в блог. Здесь ты найдёшь интересные статьи и материалы.",
    aboutDescription:
      "Приложение Posts App создано в учебных целях для закрепления навыков разработки на ReactJS.\
       Функционал включает просмотр публикаций и организацию обсуждений по различным тематикам.",
    copyRight: "2026 Oleg Chernousov",
  },
  errors: {
    errorLoadingPosts: "Error loading posts",
    errorLoadingComments: "Error loading comments",
    errorLoadingUsers: "Error loading users",
    errorLoadingUser: "Error loading user",
    errorLoadingTodos: "Error loading todos",
    userIdNotFound: (id: string | undefined) =>
      `User id = ${id} not found in URL`,
    userNotFoundById: (id: string | undefined) =>
      `User with id = ${id} not found`,
    todosNotFoundByUserId: (userId: string | undefined) =>
      `Todos for user with ${userId} not found`,
    albumsNotFoundByUserId: (userId: string | undefined) =>
      `Albums for user with ${userId} not found`,
  },
};
