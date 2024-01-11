# AWS for Developers: Data-Driven Serverless Applications with Kinesis

This is the repository for the LinkedIn Learning course AWS for Developers: Data-Driven Serverless Applications with Kinesis. The full course is available from [LinkedIn Learning][lil-course-url].

![lil-thumbnail-url]

Data-driven applications have their application flow governed by the data, and the serverless framework can serve as the web framework to create this kind of application. In this course, join instructor Marcia Villalba as she takes you through an overview of serverless applications and Kinesis, an AWS serverless service. Learn how to design an event-driven application, integrate AWS Lambda and Kinesis streams, set up necessary permissions, and more. Along the way, discover how to leverage Amazon EventBridge and Kinesis Firehose. Be sure to test out your new skills as you progress through the course in the practice challenges at the end of each section.

_See the readme file in the main branch for updated instructions and information._

## Instructions

This repository has branches for each of the videos in the course. You can use the branch pop up menu in github to switch to a specific branch and take a look at the course at that stage, or you can add `/tree/BRANCH_NAME` to the URL to go to the branch you want to access.

## Branches

The branches are structured to correspond to the videos in the course. The naming convention is `CHAPTER#_MOVIE#`. As an example, the branch named `02_03` corresponds to the second chapter and the third video in that chapter.
Some branches will have a beginning and an end state. These are marked with the letters `b` for "beginning" and `e` for "end". The `b` branch contains the code as it is at the beginning of the movie. The `e` branch contains the code as it is at the end of the movie. The `main` branch holds the final state of the code when in the course.

When switching from one exercise files branch to the next after making changes to the files, you may get a message like this:

    error: Your local changes to the following files would be overwritten by checkout:        [files]
    Please commit your changes or stash them before you switch branches.
    Aborting

To resolve this issue:
Add changes to git using this command: git add .
Commit changes using this command: git commit -m "some message"

## Installing

1. To use these exercise files, you must have the following installed:
   - [Create an AWS account](https://portal.aws.amazon.com/gp/aws/developer/registration/index.html) if you do not already have one and log in. The IAM user that you use must have sufficient permissions to make necessary AWS service calls and manage AWS resources.
   - [AWS CLI](https://docs.aws.amazon.com/cli/latest/userguide/install-cliv2.html) installed and configured
   - [AWS Serverless Application Model](https://docs.aws.amazon.com/serverless-application-model/latest/developerguide/serverless-sam-cli-install.html) (AWS SAM) installed
   - [Git Installed](https://git-scm.com/book/en/v2/Getting-Started-Installing-Git)
   - [NodeJS](https://nodejs.org/en) installed
2. Clone this repository into your local machine using the terminal (Mac), CMD (Windows), or a GUI tool like SourceTree.

[0]: # 'Replace these placeholder URLs with actual course URLs'
[lil-course-url]: https://www.linkedin.com/learning/aws-for-developers-data-driven-serverless-applications-with-kinesis-23377054
[lil-thumbnail-url]: https://media.licdn.com/dms/image/D560DAQFBkIyU-lZySw/learning-public-crop_675_1200/0/1704755693464?e=2147483647&v=beta&t=YbHOfCYePdMd9cbh_R9lnyw89TkP7Dlqm6cCsR-5w20

## Instructor

**Marcia Villalba**

Principal Developer Advocate, Amazon Web Services

[Other courses by the instructor](https://www.linkedin.com/learning/instructors/marcia-villalba)

[GitHub profile](https://github.com/mavi888)
