# 大学四年实践记录

这里整理了我大学四年的一些课程练习、个人项目和毕业设计。原来分散在不同仓库中，现在放到一起，留作记录。

每个项目保留独立目录，具体说明、依赖和启动方式以项目内的文档为准。

## 项目目录

| 项目 | 内容 | 主要技术 |
| --- | --- | --- |
| [2022211813-work](./2022211813-work/) | 早期练习文件 | 文本文件 |
| [ai-chat](./ai-chat/) | AI 聊天项目，包含后端、管理端、网页端和移动端 | Go、Gin、React、Flutter |
| [Easy-RAG](./Easy-RAG/) | RAG 系统的探索与实现，保留当时的开发进度 | TypeScript、React、千帆 SDK、TypeORM |
| [EasyNeteaseMusic](./EasyNeteaseMusic/) | 仿网易云音乐应用，包含播放、搜索和下载等功能 | Flutter、Dart |
| [GraduationProject](./GraduationProject/) | 毕业设计：多智能体 ReAct 智能问答系统 | Node.js、Express、React |
| [NeteaseCloudMusicApi](./NeteaseCloudMusicApi/) | 学习和音乐项目中使用的第三方接口项目，保留 Fork 时的代码 | Node.js |
| [OSSDP-Lab2](./OSSDP-Lab2/) | 课程实验与算法练习，基于课程仓库 Fork | Java |
| [Vehicle](./Vehicle/) | 车辆测试相关的数据采集、管理和可视化实践 | TypeScript、React、Koa、Sequelize |
| [zing_ai](./zing_ai/) | Zing AI 全栈练手项目，包含聊天、图片生成和用户管理等功能 | Go、React、Flutter |

`ai-chat` 和 `zing_ai` 保留为两个目录，分别记录原仓库的内容与历史。

## 提交历史与分支

- `main` 汇总各原仓库默认分支的内容。
- 原仓库的各个分支保存在 `archive/<原仓库名>/<原分支名>` 下，包括未合入默认分支的内容。
- 合并保留提交记录、作者和时间。为移入对应目录并清理历史敏感内容，提交 SHA 已重新生成。
- 原私有项目 `ai-chat` 的作者邮箱已改为 GitHub noreply 邮箱，内容中的联系邮箱已替换为示例地址。
- 各原仓库仍单独保留。本仓库归档代码和 Git 历史，不包含原仓库的 Issues、PR、Stars、Secrets 或 Actions 运行记录。

各项目的来源、默认分支与归档分支见 [archive-manifest.json](./archive-manifest.json)。

## 公开前的整理

归档副本已清理代码及各分支历史中发现的 API 凭证、邮件授权码、登录令牌和非示例数据库密码；移除了本地 `.env`、IDE 本地配置、用户初始化数据、包含旧凭证的覆盖率报告，以及同学报告的临时副本。`Vehicle` 提供 `.env.example` 供参考。

需要访问数据库或外部服务的项目，请自行配置环境变量和凭证。这里保留的是当时的实践代码，没有统一升级依赖，也未对所有项目重新构建或运行验证。

## 第三方来源

- `NeteaseCloudMusicApi` 来自 [Binaryify/NeteaseCloudMusicApi](https://github.com/Binaryify/NeteaseCloudMusicApi)，原 MIT 许可证保留在 [NeteaseCloudMusicApi/LICENSE](./NeteaseCloudMusicApi/LICENSE)。
- `OSSDP-Lab2` 来自 [HanchuanXu/OSSDP-Lab2](https://github.com/HanchuanXu/OSSDP-Lab2)。

项目内原有的许可证、版权声明和第三方依赖声明继续保留；本仓库不为所有项目统一声明新的许可证。
