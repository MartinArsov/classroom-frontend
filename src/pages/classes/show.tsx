import {
  ShowView,
  ShowViewHeader,
} from '@/components/refine-ui/views/show-view';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { ClassDetails } from '@/types';
import { useShow } from '@refinedev/core';
import { AdvancedImage } from '@cloudinary/react';
import { bannerPhoto } from '@/lib/cloudinary';

const Show = () => {
  const { query } = useShow<ClassDetails>({ resource: 'classes' });
  const classDetails = query?.data?.data;
  const { isLoading, isError } = query ?? {};

  if (isLoading || isError || !classDetails) {
    return (
      <ShowView className="class-view class-show">
        <ShowViewHeader title="Class Details" />
        <p className="state-message">
          {isLoading && 'Loading...'}
          {isError && 'Error occurred'}
          {!classDetails && 'No class details available'}
        </p>
      </ShowView>
    );
  }

  const teacherName = classDetails.teacher?.name || 'Unknown Teacher';
  const teacherInitials = teacherName
    .split(' ')
    .map((n) => n[0])
    .join('')
    .toUpperCase();
  const placeholderUrl = `https://placehold.co/600x400?text=${
    teacherInitials || 'N/A'
  }`;

  return (
    <ShowView className="class-view class-show">
      <ShowViewHeader resource="classes" title="Class Details" />
      <div className="banner">
        {classDetails.bannerUrl ? (
          <AdvancedImage
            alt="Class Banner"
            cldImg={bannerPhoto(
              classDetails.bannerCldPubId ?? '',
              classDetails.name,
            )}
          />
        ) : (
          <div className="placeholder" />
        )}
      </div>
      <Card className="details-card">
        <div className="details-header">
          <div>
            <h1>{classDetails.name}</h1>
            <p>{classDetails.description}</p>
          </div>
          <div>
            <Badge variant="outline">{classDetails.capacity}</Badge>
            <Badge
              variant={
                classDetails.status === 'active' ? 'default' : 'secondary'
              }
            >
              {classDetails.status?.toUpperCase()}
            </Badge>
          </div>
        </div>
        <div className="details-grid">
          <div className="instructor">
            <h3>Instructor</h3>
            <div>
              <img
                src={classDetails.teacher?.image ?? placeholderUrl}
                alt={teacherName}
              />
              <div>
                <p>{teacherName}</p>
                <p>{classDetails.teacher?.email}</p>
              </div>
            </div>
          </div>
          <div className="department">
            <p>Department</p>
            <div>
              <p>{classDetails.department?.name}</p>

              <p>{classDetails.department?.description}</p>
            </div>
          </div>
        </div>
        <Separator />
        <div className="subject">
          <Badge variant="outline">Code: {classDetails.subject?.code}</Badge>
          <p>{classDetails.subject?.name}</p>
          <p>{classDetails.subject?.description}</p>
        </div>
        <Separator />
        <div className="join">
          <h2>Join Class</h2>
          <ol>
            <li>Ask your teacher for invite code</li>
            <li>Go to "Join Class" button</li>
            <li>Enter the invite code and submit</li>
          </ol>
        </div>
        <Button size="lg" className="w-full">
          Join Class
        </Button>
      </Card>
    </ShowView>
  );
};

export default Show;
